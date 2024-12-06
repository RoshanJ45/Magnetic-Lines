      const wrapper = document.querySelector('div');
      for (let i = 0; i < 81; i++) {
        const span = document.createElement('span');
        wrapper.appendChild(span);
      }
      const items = wrapper.querySelectorAll('span');
      const onPointerMove = (e) => {
        items.forEach(item => {
          const rect = item.getBoundingClientRect();
          const x = rect.x + (rect.width / 2);
          const y = rect.y + (rect.height / 2);
          const b = e.clientX - x;
          const a = e.clientY - y;
          const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
          const r = (Math.acos(b / c) * 180 / Math.PI) * (e.clientY > y ? 1 : -1);
          item.style.setProperty('--rotate', `${r}deg`);
        });
      };
      window.addEventListener('pointermove', onPointerMove);
    