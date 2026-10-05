from flask import Flask, render_template, Response

app = Flask(__name__)


# =========================
# MAIN GAMEVAULT
# =========================

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/games/snake")
def snake():
    return render_template("games/snake.html")


# =========================
# BILLIONAIRE BREAKOUT
# =========================

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


# =========================
# BILLIONAIRE CATEGORIES
# =========================

@app.route("/games/billionaire/automotive")
def billionaire_automotive():
    return render_template("games/billionaire-automotive.html")


@app.route("/games/billionaire/aviation")
def billionaire_aviation():
    return render_template("games/billionaire-aviation.html")


@app.route("/games/billionaire/yachts")
def billionaire_yachts():
    return render_template("games/billionaire-yachts.html")


@app.route("/games/billionaire/watches")
def billionaire_watches():
    return render_template("games/billionaire-watches.html")


@app.route("/games/billionaire/real-estate")
def billionaire_real_estate():
    return render_template("games/billionaire-real-estate.html")


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
    return render_template("games/billionaire-mega-projects.html")


# =========================
# INFORMATION / POLICY
# =========================

@app.route("/privacy-policy")
def privacy_policy():
    return render_template("privacy.html")


@app.route("/terms")
def terms():
    return render_template("terms.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/games/memory")
def memory():
    return render_template("games/memory.html")


@app.route("/games/reaction")
def reaction():
    return render_template("games/reaction.html")


# =========================
# SEO
# =========================

@app.route("/robots.txt")
def robots_txt():
    content = """User-agent: *
Allow: /

Sitemap: https://gamevault-no18.onrender.com/sitemap.xml
"""
    return Response(content, mimetype="text/plain")


@app.route("/sitemap.xml")
def sitemap_xml():
    pages = [
        "/",
        "/games/snake",
        "/games/billionaire",
        "/games/billionaire/play",
        "/games/billionaire/automotive",
        "/games/billionaire/aviation",
        "/games/billionaire/yachts",
        "/games/billionaire/watches",
        "/games/billionaire/real-estate",
        "/games/billionaire/jewellery",
        "/games/billionaire/art",
        "/games/billionaire/empire",
        "/games/billionaire/technology",
        "/games/billionaire/world",
        "/games/billionaire/mega-projects",
        "/about",
        "/contact",
        "/privacy-policy",
        "/terms",
    ]

    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    for page in pages:
        xml += f'    <url><loc>https://gamevault-no18.onrender.com{page}</loc></url>\n'

    xml += "</urlset>"

    return Response(xml, mimetype="application/xml")


# =========================
# RUN
# =========================

if __name__ == "__main__":
    app.run(debug=True)