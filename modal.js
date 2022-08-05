 const body = document.querySelector('body');
      const modal1 = document.querySelector('#m1');
      const modal2 = document.querySelector('#m2');
      const modal3 = document.querySelector('#m3');
      const btnOpenPopup1 = document.querySelector('#modal1');
      const btnOpenPopup2 = document.querySelector('#modal2');
      const btnOpenPopup3 = document.querySelector('#modal3');

      btnOpenPopup1.addEventListener('click', () => {
        modal1.classList.toggle('show');

        if (modal1.classList.contains('show')) {
          body.style.overflow = 'hidden';
        }
      });
      btnOpenPopup2.addEventListener('click', () => {
        modal2.classList.toggle('show');
        if (modal2.classList.contains('show')) {
          body.style.overflow = 'hidden';
        }
      });
      btnOpenPopup3.addEventListener('click', () => {
        modal3.classList.toggle('show');
        if (modal3.classList.contains('show')) {
          body.style.overflow = 'hidden';
        }
      });

      modal1.addEventListener('click', (event) => {
        if (event.target === modal1) {
          modal1.classList.toggle('show');

          if (!modal1.classList.contains('show')) {
            body.style.overflow = 'auto';
          }
        }
      });
      modal2.addEventListener('click', (event) => {
        if (event.target === modal2) {
          modal2.classList.toggle('show');

          if (!modal2.classList.contains('show')) {
            body.style.overflow = 'auto';
          }
        }
      });
      modal3.addEventListener('click', (event) => {
        if (event.target === modal3) {
          modal3.classList.toggle('show');

          if (!modal3.classList.contains('show')) {
            body.style.overflow = 'auto';
          }
        }
      });
