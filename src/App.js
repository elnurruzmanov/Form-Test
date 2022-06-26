import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };


  return (
    <div className="App">
      <div className="container">
        <h1>Form Test</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label">First Name:</label>
          <input
            {...register("firstName", {
              required: "поле обязательно к заполнением",
              minLength: {
                value: 5,
                message: "минимум 5 символов",
              },
            })}
            type="text"
            className="input"
            placeholder="first name..."
            autoComplete="off"
          />
          <div className="footer_form" style={{ height: 40 }}>
            {errors?.firstName && (
              <p className="footer_text">
                {errors?.firstName?.message || "Error"}
              </p>
            )}
          </div>

          <label className="label">Last Name:</label>
          <input
            type="text"
            {...register("firstName", {
              required: "поле обязательно к заполнением",
              minLength: {
                value: 5,
                message: "минимум 5 символов",
              },
            })}
            className="input"
            placeholder="last name..."
            autoComplete="off"
          />
          <div className="footer_form" style={{ height: 40 }}>
            {errors?.firstName && (
              <p className="footer_text">
                {errors?.firstName?.message || "Error"}
              </p>
            )}
          </div>

{/* date */}

          <label className="label">Last Name:</label>
          <input
            type="date"
            {...register("firstName", {
              required: "поле обязательно к заполнением",
              minLength: {
                value: 5,
                message: "минимум 5 символов",              },
            })}
            className="input"
            placeholder="last name..."
            autoComplete="off"
          />
          <div className="footer_form" style={{ height: 40 }}>
            {errors?.firstName && (
              <p className="footer_text">
                {errors?.firstName?.message || "Error"}
              </p>
            )}
          </div>



          <label className="label">Email</label>
          <input
            type="text"
            {...register("firstName", {
              required: "поле обязательно к заполнением",
              minLength: {
                value: 5,
                message: "минимум 5 символов",
              },
            })}
            className="input"
            placeholder="email..."
            autoComplete="off"
          />
          <div className="footer_form" style={{ height: 40 }}>
            {errors?.firstName && (
              <p className="footer_text">
                {errors?.firstName?.message || "Error"}
              </p>
            )}
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
