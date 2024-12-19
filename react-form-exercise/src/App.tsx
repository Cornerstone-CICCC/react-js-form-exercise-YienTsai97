import React, { useState } from "react";

type User = {
  firstname: string,
  lastname: string,
  age: number,
  favoriteFoods: string[]
}

const App = () => {
  /* Your states here */
  const [userForm, setUserForm] = useState<User>({
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods: []
  })

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setUserForm(prevState => {
        const favoriteFoods = checked ? [...prevState.favoriteFoods, value] : prevState.favoriteFoods.filter(food => food !== value)
        return { ...prevState, favoriteFoods }
      })
    } else {
      setUserForm(preState => ({
        ...preState,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(userForm)
    setIsSubmitted(true)
  }

  const handleClearUser = () => {
    setUserForm({
      firstname: "",
      lastname: "",
      age: 0,
      favoriteFoods: []
    })
    setIsSubmitted(false)
  }



  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" value={userForm.firstname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" value={userForm.lastname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={userForm.age} onChange={handleChange} />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input type="checkbox" id="chicken" name="favoriteFoods" value="Chicken" onChange={handleChange} />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input type="checkbox" id="beef" name="favoriteFoods" value="Beef" onChange={handleChange} />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="vegetables" name="favoriteFoods" value="Vegetables" onChange={handleChange} />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" name="favoriteFoods" value="Dessert" onChange={handleChange} />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="pork" name="favoriteFoods" value="Pork" onChange={handleChange} />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
        <button type="submit">Display User</button>
      </form>

      <button type="button" onClick={handleClearUser}>Clear</button>

      <div className="output">
        {/* Display the greeting here */
          isSubmitted ? (<p>" Hello {userForm.firstname} {userForm.lastname}. You are {userForm.age} years old and your favorite foods are: {userForm.favoriteFoods.join(", ")} ".</p>) : ("")
        }
      </div>
    </div >
  );
};

export default App;