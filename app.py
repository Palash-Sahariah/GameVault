from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/games/snake")
def snake():
    return render_template("games/snake.html")


@app.route("/games/billionaire")
def billionaire():
    return render_template("games/billionaire.html")


@app.route("/games/billionaire/play")
def billionaire_play():
    return render_template("games/billionaire-play.html")


@app.route("/games/billionaire/vault")
def billionaire_vault():
    return render_template("games/billionaire-vault.html")


@app.route("/games/billionaire/cart")
def billionaire_cart():
    return render_template("games/billionaire-cart.html")


@app.route("/games/billionaire/automotive")
def billionaire_automotive():
    return render_template(
        "games/billionaire-automotive.html"
    )


@app.route("/games/billionaire/aviation")
def billionaire_aviation():
    return render_template(
        "games/billionaire-aviation.html"
    )


@app.route("/games/billionaire/real-estate")
def billionaire_real_estate():
    return render_template("games/billionaire-real-estate.html")


@app.route("/games/billionaire/yachts")
def billionaire_yachts():
    return render_template("games/billionaire-yachts.html")


@app.route("/games/billionaire/watches")
def billionaire_watches():
    return render_template("games/billionaire-watches.html")


@app.route("/games/billionaire/jewellery")
def billionaire_jewellery():
    return render_template("games/billionaire-jewellery.html")


@app.route("/games/billionaire/art")
def billionaire_art():
    return render_template("games/billionaire-art.html")


@app.route("/games/billionaire/empire")
def billionaire_empire():
    return render_template("games/billionaire-empire.html")


@app.route("/games/billionaire/technology")
def billionaire_technology():
    return render_template("games/billionaire-technology.html")


@app.route("/games/billionaire/world")
def billionaire_world():
    return render_template("games/billionaire-world.html")


@app.route("/games/billionaire/mega-projects")
def billionaire_mega_projects():
    return render_template(
        "games/billionaire-mega-projects.html"
    )


if __name__ == "__main__":
    app.run(debug=True)

if __name__ == "__main__":
    app.run(debug=True)