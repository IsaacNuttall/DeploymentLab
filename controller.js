let myGoals = ['read a book every week', 'go running for 20 minutes every day', 'compliment at least 3 people every day']

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will become wealthy very soon", "Watch out for Monkeys", "Be sure to invest in soda companies", "Look within, and you will find yourself",
    "Never forget to be close to your family", "Beware the 30th of April"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    addGoal: (req, res) => {
        let {goal} = req.body

        console.log(goal)

        myGoals.push(goal)

        res.status(200).send(myGoals)
    },

    deleteGoal: (req, res) => {
        let index = req.params.id - 1

        myGoals.splice(index, 1)

        res.status(200).send(myGoals)
    },

    updateGoal: (req, res) => {

        console.log(req,'Updated Goal')

        let {goal} = req.body

        let index = req.params.id - 1

        myGoals.splice(index, 1, goal)

        res.status(200).send(myGoals)
    }



} 