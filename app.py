from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/dashboard")
def dashboard():

    stats = [

        {
            "title": "Available Classrooms",
            "value": 42,
            "trend": "+6% Today",
            "icon": "fa-school",
            "color": "blue"
        },

        {
            "title": "Laboratories",
            "value": 8,
            "trend": "All Active",
            "icon": "fa-flask",
            "color": "green"
        },

        {
            "title": "Energy Usage",
            "value": "450 kWh",
            "trend": "-8%",
            "icon": "fa-bolt",
            "color": "orange"
        },

        {
            "title": "Maintenance Alerts",
            "value": 3,
            "trend": "Pending",
            "icon": "fa-triangle-exclamation",
            "color": "red"
        }

    ]

    return render_template(
        "dashboard.html",
        stats=stats
    )

if __name__ == "__main__":
    app.run(debug=True)