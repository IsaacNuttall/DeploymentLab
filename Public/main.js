const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const goalInput = document.querySelector('#newGoal')
const addGoalBtn = document.querySelector('#addGoal')
const deleteInput = document.querySelector('#goalId')
const deleteGoalBtn = document.querySelector('#deleteButton')
const updateInput = document.querySelector('#replacementGoal')
const idToUpdate = document.querySelector('#replacementid')
const updateBtn = document.querySelector('#updateButton')

const baseURL = 'http://localhost:4000/api'

const getCompliment = () => {
    axios.get("http://18.220.53.166:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://18.220.53.166:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addGoal = () => {

    let bodyObj = {
        goal: goalInput.value
    }

    axios.post(`${baseURL}/goal`, bodyObj)
        .then((res) => {
            console.log(res.data)
            })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteGoal = () => {
            
        let idToDelete = deleteInput.value
            
        axios.delete(`${baseURL}/goal/${idToDelete}`)
        .then((res) => {
             console.log(res.data)
                    })
                .catch((err) => {
                console.log(err)
                    })
            }

const updateGoal = () => {
    console.log('Goal updated')

    let bodyObj2 = {
        goal: updateInput.value
    }
console.log(updateInput.value)
console.log(idToUpdate.value)

axios.put(`${baseURL}/goal/${idToUpdate.value}`, bodyObj2)

.then((res) => {
    console.log(res.data)
    })
.catch((err) => {
    console.log(err)
})
.finally(() => console.log('final'))

}

complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

addGoalBtn.addEventListener('click', addGoal)

deleteGoalBtn.addEventListener('click', deleteGoal)

updateBtn.addEventListener('click', updateGoal)