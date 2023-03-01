$(".js-open").on("click", function () {
  var target = $(this).attr("data-target");
  $(target).toggleClass("is-visible");
});

$(".js-close").on("click", function () {
  $(this).parent().removeClass("is-visible");
});

// function getProduct() {
//   //copy y chang ben quan tri
//   // the cho renderTable = renderData(response.data)
// }

// function renderData(list) {
//   let html = list.reduce((output, item) => {
//     output + `
//     <div class="card">
//     <div class="top-card">
//       <i class="fa-brands fa-android"></i>
//       <em class="stocks">In Stock</em>
//     </div>
//     <div class="img-container">
//       <img
//         class="product-img"
//         src="../imgs/vn-galaxy-a23-sm-a235-sm-a235flbgxxv-531678261.avif"
//         alt=""
//       />
//     </div>
//     <div class="bot-card">
//       <div class="name-card">
//         <strong class="product-name">${item.name}</strong>
//         <button class="heart">
//           <i class="fas fa-heart"></i>
//         </button>
//       </div>
//       <div class="wrapper">
//         <h5>Wireless Noise Cancelling Earphones</h5>
//         <p>
//           AirPods Pro have been designed to deliver active Noise
//           Cancellation for immersive sound. Transparancy mode so much can
//           hear your surroundings.
//         </p>
//       </div>
//       <div class="purchase">
//         <p class="product-price">$1000</p>
//         <span class="btn-add">
//           <div>
//             <button class="add-btn">Add</button>
//           </div>
//         </span>
//       </div>
//     </div>
//   </div>
//     `
//   })
// }
