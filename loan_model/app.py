from flask import Flask, request, jsonify, render_template

import numpy as np
app = Flask(__name__)
import pickle; pickle.HIGHEST_PROTOCOL
with open(r"E:\CodeBase\Loan\loanmodel.pkl", 'rb') as f:
    model = pickle.load(f)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = round(prediction[0], 2)
    prediction_text = "{}".format(output)
    return jsonify(prediction_text)



@app.route('/results', methods=['POST'])
def results():
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])

    output = prediction[0]
    return jsonify(output)


if __name__ == "__main__":
    app.run(debug=True)
