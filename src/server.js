import { createServer, Model } from "miragejs"

// Import local van images
import modestExplorerImg from "./assets/photos/modest-explorer.png"
import beachBumImg from "./assets/photos/beach-bum.png"
import reliableRedImg from "./assets/photos/reliable-red.png"
import dreamfinderImg from "./assets/photos/dreamfinder.png"
import theCruiserImg from "./assets/photos/the-cruiser.png"
import greenWonderImg from "./assets/photos/green-wonder.png"

createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1",  name: "Modest Explorer",  price: 60,   imageUrl: modestExplorerImg,  type: "simple",  hostId: "123",  description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"})
        server.create("van", { id: "2",  name: "Beach Bum",        price: 80,   imageUrl: beachBumImg,        type: "rugged",  hostId: "123",  description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper."})
        server.create("van", { id: "3",  name: "Reliable Red",     price: 100,  imageUrl: reliableRedImg,     type: "luxury",  hostId: "456",  description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it."})
        server.create("van", { id: "4",  name: "Dreamfinder",      price: 65,   imageUrl: dreamfinderImg,     type: "simple",  hostId: "789",  description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated."})
        server.create("van", { id: "5",  name: "The Cruiser",      price: 120,  imageUrl: theCruiserImg,      type: "luxury",  hostId: "789",  description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go."})
        server.create("van", { id: "6",  name: "Green Wonder",     price: 70,   imageUrl: greenWonderImg,     type: "rugged",  hostId: "123",  description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere."})
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/vans", (schema, _request) => {
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, _request) => {
            // Hard-code the hostId for now
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.where({ id, hostId: "123" })
        })
    }
})
