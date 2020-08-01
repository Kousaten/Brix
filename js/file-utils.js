var fs = require('fs')
const { dialog } = require('electron').remote

class File {
    constructor(path) {
        this.path = path
    }
    isExists(callback) {
        fs.access(this.path, function (err) {
            if (err) {
                return callback(false)
            }
            return callback(true)
        })
    }
    create() {
        this.write("")
    }
    remove() {
        fs.unlinkSync(this.path)
    }
    read() {
        return fs.readFileSync(this.path).toString()
    }
    write(data) {
        fs.writeFileSync(this.path, data)
    }
}

function showFileOpenDialog(callback) {
    dialog.showOpenDialog({
        filters: [
            { name: "Brix Project File (*.brp)", extensions: ["brp"] },
        ]
    }).then(result => {
        if (!result.canceled) {
            var path = result.filePaths[0]
            callback(false, path)
        } else callback(false, undefined)
    }).catch(err => {
        callback(true, undefined)
    })
}

function showFileSaveDialog(def, callback) {
    dialog.showSaveDialog({
        defaultPath: def,
    }).then(result => {
        if (!result.canceled) {
            var path = result.filePaths[0]
            callback(false, path)
        } else callback(false, undefined)
    }).catch(err => {
        callback(true, undefined)
    })
}
