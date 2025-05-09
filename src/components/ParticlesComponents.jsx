import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // لاحظ الفرق هنا

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // بدل loadFull
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: {
            value: "",
          },
        },
        particles: {
          color: {
            value: "#7cefb9",
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true, // تمكين التفاعل مع الماوس
              mode: "repulse", // التنافر مع الماوس
            },
            onclick: {
              enable: true,
              mode: "push", // إضافة المزيد من الـ particles عند النقر
            },
          },
          modes: {
            repulse: {
              distance: 150, // المسافة بين الـ particles والمؤشر
              duration: 1, // المدة الزمنية للتفاعل
            },
          },
        },
      }}
    />
  );
};

export default ParticlesComponent;
