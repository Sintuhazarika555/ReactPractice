import React from 'react'
// 0. import useForm from react-hook-form
import { useForm } from 'react-hook-form'

// Capitalized 'F' in the component name
const RegistrationForm = () => {

    // 1. initialize useForm
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    // 2. This only runs if validation is successful
    const onSave = (data) => {
        console.log("Submitted Data:", data);
        alert("Form submitted successfully!");
    };

    return (
        <div style={{ border: '2px solid black', padding: '20px', marginTop: '20px' }}>

            <h2>sign up</h2>
            {/*3. use handleSubmit to wrap onSave*/}
            <form onSubmit={handleSubmit(onSave)}>

                {/* NAME FIELD */}
                <div>
                    <label>Full Name</label>

                    <input
                        {...register("fullName",
                            { required: "Name is required" })}
                    />
                    
                    {/* // 4. Display validation error for fullName */}
                    {errors.fullName && 
                    <span style={{ color: 'red' }}>
                        {errors.fullName.message}
                    </span>}

                </div>

                {/* EMAIL FIELD */}
                <div>
                    <label>Email</label>

                    <input
                        {...register("email", 
                            {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format"
                            }
                        })}
                    />

                    {errors.email && 
                    <span style={{ color: 'red' }}>
                        {errors.email.message}
                    </span>}

                </div>

                <button type="submit">Submit</button>

            </form>


        </div>
    )
}

// Matching the capitalized name here
export default RegistrationForm;