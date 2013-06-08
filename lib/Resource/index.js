var Resource= module.exports= function(options) {
    options = options || {};



    Object.defineProperty(this, 'Schema', {
        enumerable: true,
        value: options.schema
    });

    Object.defineProperty(this, 'db', {
        enumerable: true,
        value: options.db
    });

    Object.defineProperty(this, 'table', {
        enumerable: true,
        value: options.table
    });

    Object.defineProperty(this, 'options', {
        enumerable: true,
        value: options.options
    });
}






Resource.prototype.save= function(schema, done) {
    this.db.save(schema, this.table, function(err) {
        if (err) {
            done(err)
        } else {
            done(null)
        }
    })
}






Resource.prototype.remove= function(schema, done) {
    this.db.remove(schema, this.table, function(err) {
        if (err) {
            done(err)
        } else {
            done(null)
        }
    })
}





Resource.prototype.find= function(condition, done) {
    this.db.find(this.schema, this.table, condition, function(err,schemas) {
        if (err) {
            done(err)
        } else {
            done(null,schemas)
        }
    })
}





Resource.prototype.findOne= function(condition, done) {
    this.db.findOne(this.schema, this.table, condition, function(err,schema) {
        if (err) {
            done(err)
        } else {
            done(null,schema)
        }
    })
}


