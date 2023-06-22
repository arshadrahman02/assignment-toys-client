import React from "react";
// import Swal from "se";
import Swal from "sweetalert2";
const AddToys = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellerName = form.SellerName.value;
    const sellerEmail = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const photo = form.url.value;
    const subCategory = form.category.value;
    const newToys = {
      name,
      sellerName,
      sellerEmail,
      price,
      rating,
      quantity,
      details,
      photo,
      subCategory,
    };
    console.log(newToys);

    fetch("https://assignment-num-11-server.vercel.app/addToys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toys Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-gray-300 ">
          <div className="hero-content flex-col ">
            <div className="text-center">
              <h1 className="text-5xl font-bold  text-error">
                Add Your Favorite Toys{" "}
              </h1>
              <p className="py-6  text-error">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <form onSubmit={handleAddToy}>
              <div className="card w-full shadow-2xl bg-base-200 opacity-90">
                <div className="card-body grid grid-cols-2 mt-10 gap-10 ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Toy Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Toys name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Seller Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Seller Name"
                      name="SellerName"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Seller Email"
                      name="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      placeholder="price"
                      name="price"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Rating"
                      name="rating"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Available Quantity"
                      name="quantity"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="my-2" for="cars">
                      Sub Category
                    </label>

                    <select name="category">
                      <option value="sports car">Sports Car</option>
                      <option value="Mini Fire Truck">Mini Fire Truck</option>
                      <option value="Truck">Truck</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Details Description</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Details"
                      name="details"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="url"
                      placeholder="Place URL"
                      name="url"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className="btn  btn-primary mt-10 w-full "
                    type="submit"
                    value="Add Toy"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
