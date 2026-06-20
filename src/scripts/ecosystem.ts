import * as THREE from "three";

// Signature WebGL element: a Fibonacci-sphere node network that represents
// how Validum links every entity (EPS, ARL, pensión, caja, DIAN, nómina)
// into a single traceable flow. Rotates on its own and reacts to the cursor.
export function initEcosystem() {
  const canvas = document.querySelector<HTMLCanvasElement>("[data-net]");
  if (!canvas) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wrap = canvas.parentElement as HTMLElement;
  let w = wrap.clientWidth;
  let h = wrap.clientHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 100);
  camera.position.z = 4.6;
  const group = new THREE.Group();
  scene.add(group);

  const N = 86;
  const R = 1.9;
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * 2.399963; // golden angle
    pts.push(new THREE.Vector3(Math.cos(phi) * r * R, y * R, Math.sin(phi) * r * R));
  }

  const nodeGeo = new THREE.SphereGeometry(0.03, 10, 10);
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0xcfe0e8 });
  const blueMat = new THREE.MeshBasicMaterial({ color: 0x1d3f72 });
  pts.forEach((p, i) => {
    const m = new THREE.Mesh(nodeGeo, i % 7 === 0 ? blueMat : nodeMat);
    m.position.copy(p);
    group.add(m);
  });

  const lp: number[] = [];
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (pts[i].distanceTo(pts[j]) < 1.15) {
        lp.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
      }
    }
  }
  const lg = new THREE.BufferGeometry();
  lg.setAttribute("position", new THREE.Float32BufferAttribute(lp, 3));
  const lines = new THREE.LineSegments(
    lg,
    new THREE.LineBasicMaterial({ color: 0x6e94a6, transparent: true, opacity: 0.42 })
  );
  group.add(lines);

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(1.25, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x2a4049, transparent: true, opacity: 0.32 })
  );
  group.add(core);

  let tx = 0.2;
  let ty = 0;
  let mx = 0.2;
  let my = 0;
  wrap.addEventListener("pointermove", (e) => {
    const r = wrap.getBoundingClientRect();
    mx = ((e.clientX - r.left) / r.width - 0.5) * 1.2;
    my = ((e.clientY - r.top) / r.height - 0.5) * 1.2;
  });

  let raf = 0;
  const animate = () => {
    tx += (mx - tx) * 0.04;
    ty += (my - ty) * 0.04;
    group.rotation.y += 0.0014 + tx * 0.013;
    group.rotation.x = ty * 0.5;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };

  if (prefersReduced) {
    renderer.render(scene, camera); // single static frame
  } else {
    animate();
  }

  window.addEventListener("resize", () => {
    w = wrap.clientWidth;
    h = wrap.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  // pause when off-screen to save the main thread
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (prefersReduced) return;
        if (en.isIntersecting && !raf) animate();
        else if (!en.isIntersecting && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      });
    },
    { threshold: 0.01 }
  );
  io.observe(wrap);
}
