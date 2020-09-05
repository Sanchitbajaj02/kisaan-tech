var product = window.localStorage.getItem("product");

if (product) {
  document.querySelector("#pro").innerHTML = `
        <div class="row my-3">
        <div class="col-12 col-sm-4">
          <div class="card">
            <div class="card-body">
              <img src="./image/drone2.jpeg" alt="drone" class="drone">
              <h5 class="card-title">Price: ₹1000/-</h5>
              <p class="card-text"><a href="#" role="button" class="btn btn-primary">Buy Now</a></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-8">
          <h3>Loren</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cupiditate aliquam unde adipisci dolor eius quos rem expedita autem eveniet explicabo architecto reprehenderit, vero assumenda laudantium perspiciatis suscipit at fugiat?</p>
        </div>
      </div>`;

    window.localStorage.removeItem("product");
}
