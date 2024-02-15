/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vq7tpfemu7m2w01")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "er8dwqpf",
    "name": "20",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vq7tpfemu7m2w01")

  // remove
  collection.schema.removeField("er8dwqpf")

  return dao.saveCollection(collection)
})
