'use strict'

let cars = [{ make: "toyota", model: "camry", color: "silver"},
{make: "dodge", model: "ram", color: "blue"}]

class CarController {
    carget({ request, response}) {
        response.send(cars)
    }

    carcreate ({ request, response }) {
        const car = request.post()

        cars.push(car)

        response.send(cars)
    }
    cardelete ({ request, response }) {
        const body = request.post()

        cars = cars.filter((eachItem) => {
            return eachItem.id !== body.id
        })
    }
}

module.exports = CarController
