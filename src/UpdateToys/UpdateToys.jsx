import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = ({ toy }) => {
  const update = useLoaderData();
  const {
    _id,
    rating,
    name,
    sellerName,
    sellerEmail,
    photo,
    price,
    quantity,

    details,
    subCategory,
  } = update;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;

    const quantity = form.quantity.value;
    const details = form.details.value;

    const updatedToys = {
      price,

      quantity,
      details,
    };
    console.log(updatedToys);

    fetch(`https://assignment-num-11-server.vercel.app/addToys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toys Updated Added Successfully",
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
                Update Your Toy's
              </h1>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="card w-full shadow-2xl bg-base-200 opacity-90">
                <div className="card-body grid grid-cols-2 mt-10 gap-10 ">
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
                </div>
                <div>
                  <input
                    className="btn  btn-primary mt-10 w-full "
                    type="submit"
                    value="Update Toy"
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

export default UpdateToys;
