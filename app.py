from flask import Flask, send_from_directory, abort
import os

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:filename>')
def serve_file(filename):
    root = app.static_folder
    full = os.path.join(root, filename)
    # serve file if exact path exists (css/js/assets and explicit html)
    if os.path.isfile(full):
        return send_from_directory(root, filename)
    # try filename.html for routes like /products
    if '.' not in filename:
        candidate = filename + '.html'
        if os.path.isfile(os.path.join(root, candidate)):
            return send_from_directory(root, candidate)
    abort(404)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)