import statusRotas from './statusRotas.js'

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).json({ message: "API rodando" }))

    app.use(statusRotas)
}

export default routes