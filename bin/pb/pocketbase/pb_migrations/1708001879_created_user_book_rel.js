/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p8gs4zsgxy9brp4",
    "created": "2024-02-15 12:57:59.549Z",
    "updated": "2024-02-15 12:57:59.549Z",
    "name": "user_book_rel",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "egr0sqb6",
        "name": "user_id",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0zpmjtxd",
        "name": "book_id",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p8gs4zsgxy9brp4");

  return dao.deleteCollection(collection);
})
