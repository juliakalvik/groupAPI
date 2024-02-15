/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4tvvuodyzfk2s2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n3llmude",
    "name": "relations",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "eef3ja3ucl8kmoi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4tvvuodyzfk2s2")

  // remove
  collection.schema.removeField("n3llmude")

  return dao.saveCollection(collection)
})
