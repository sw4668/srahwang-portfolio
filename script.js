// document.addEventListener('DOMContentLoaded', function() {
//     var checkbox = document.getElementById('toggleButton');
//     var designWork = document.getElementById('designWork');
//     var funWork = document.getElementById('funWork');
    
//     checkbox.addEventListener('change', function() {
//         if(this.checked) {
//             designWork.style.display = 'none';
//             funWork.style.display = 'block';
//         } else {
//             designWork.style.display = 'block';
//             funWork.style.display = 'none';
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var toggleSlider = document.querySelector('.toggle-slider');
//     var labelLeft = document.getElementById('toggleLabelLeft');
//     var labelRight = document.getElementById('toggleLabelRight');
//     var designWork = document.getElementById('designWork');
//     var funWork = document.getElementById('funWork');
//     var isDesign = true;

//     toggleSlider.addEventListener('click', function() {
//         isDesign = !isDesign;
//         var sliderButton = this.querySelector('.slider-button');
//         if (isDesign) {
//             sliderButton.style.transform = 'translateY(-50%) translateX(5px)';
//             designWork.style.display = 'block';
//             funWork.style.display = 'none';
//             labelLeft.style.opacity = '1';
//             labelRight.style.opacity = '0.5';
//         } else {
//             sliderButton.style.transform = 'translateY(-50%) translateX(60px)';
//             designWork.style.display = 'none';
//             funWork.style.display = 'block';
//             labelLeft.style.opacity = '0.5';
//             labelRight.style.opacity = '1';
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     var toggleSwitch = document.querySelector('.toggle-switch');
//     var designWork = document.getElementById('designWork');
//     var funWork = document.getElementById('funWork');
  
//     toggleSwitch.addEventListener('click', function() {
//       this.classList.toggle('is-fun-work');
//       var isFunWork = this.classList.contains('is-fun-work');
//       designWork.style.display = isFunWork ? 'none' : 'block';
//       funWork.style.display = isFunWork ? 'block' : 'none';
//     });
//   });

// window.onscroll = function() {fadeHeader()};

// function fadeHeader() {
//   var header = document.querySelector('header');
//   var opacity = 1 - window.pageYOffset / 400; /* Adjust the rate of fading */
//   if (opacity < 0) {
//     opacity = 0; // Ensure opacity doesn't go negative
//   }
//   header.style.opacity = opacity;
// }

  
document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('color_mode');
    var designWork = document.getElementById('designWork');
    var funWork = document.getElementById('funWork');

    checkbox.addEventListener('change', function() {
        if(checkbox.checked) {
            // Show Fun Work and hide Design
            funWork.style.display = 'block';
            designWork.style.display = 'none';
        } else {
            // Show Design and hide Fun Work
            designWork.style.display = 'block';
            funWork.style.display = 'none';

             // Reapply flex styles to ensure consistency
        designWork.style.display = 'flex';
        designWork.style.alignItems = 'center';
        designWork.style.justifyContent = 'space-between';
        }
    });
});


  
    // New functionality for active navigation links
//     activateNavLinks();
//   });
  
//   function activateNavLinks() {
//     document.querySelectorAll('nav a').forEach(link => {
//       link.addEventListener('click', function() {
//         document.querySelectorAll('nav a').forEach(node => {
//           node.classList.remove('active');
//         });
//         this.classList.add('active');
//       });
//     });
  
//     window.addEventListener('scroll', () => {
//       document.querySelectorAll('section').forEach(section => {
//         if (section.offsetTop <= window.scrollY && section.offsetTop + section.offsetHeight > window.scrollY) {
//           document.querySelectorAll('nav a').forEach(link => {
//             link.classList.remove('active');
//             if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
//               link.classList.add('active');
//             }
//           });
//         }
//       });
//     });
//   }
  
// these phrases will repeat
