import os
from flask import (Flask, flash, jsonify, redirect, render_template, send_from_directory, request, session, url_for)


# Configure application
app = Flask(__name__)


@app.route('/', methods = ["POST", "GET"])
def index():
    if request.method == "GET":
    #give index.html the calculated parameters  
        return render_template('index.html')
    
    if request.method == "POST":
        ##take each parameter from the form
        # (a implémenter: choix du nombre de tr par opérateur) 
        TR1 = request.form.get("TempsdeRetention1") 
        TR2 = request.form.get("TempsdeRetention2") 
        TM = request.form.get("TempsMort")
        ##calculate the results and display it in a table
        #TRr : temps de rétention réduits
        TRr1 = TM - TR1
        TRr2 = TM - TR2

        #Retention Factor
        Kret1 = TRr1 / TM
        Kret2 = TRr2 / TM

        #Selectivity
        Alpha = Kret1 / Kret2

        return render_template('index.html', Alpha = Alpha, Kret1 = Kret1, Kret2 = Kret2, TRr1 = TRr1, TRr2 = TRr2)


        












##form = PhotoForm()


