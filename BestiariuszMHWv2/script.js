
const data = {
  "id": 1,
  "name": "Apceros",
  "type": "small",
  "species": "herbivore",
  "description": "Herbivores that inhabit the Wildspire Waste. They've developed...",
  "elements": [
    {
      "element": "thunder",
      "stars": 1,
      "condition": null
    },
    {
      "element": "fire",
      "stars": 1,
      "condition": null
    }
  ],
  "ailments": [],
  "locations": [],
  "resistances": [],
  "weaknesses": [
      {
          "element": "thunder",
          "stars": 1,
          "condition": null
      }
  ],
  "rewards": [
      {
          "id": 1,
          "item": {
              "id": 67,
              "name": "Raw Meat",
              "description": "Meat carved from a monster. Can be ...",
              "rarity": 1,
              "carryLimit": 10,
              "value": 5
          },
          "conditions": [
              {
                  "type": "carve",
                  "subtype": null,
                  "rank": "low",
                  "quantity": 1,
                  "chance": 100
              }
          ]
      }
  ]
}

const monsterRow = document.querySelector(".monsters_row")
monsterRow.innerHTML += `
  <div class="monster">
    <div class="monster_gradient"></div>
    <div class="monster_image_container">
      <img class="monster_image" src="./assets/great_jagras.png" />
    </div>
    <div class="monster_text">
      <header>
        <h3 class="monster_title">Great Jagras</h3>
        <p class="monster_type">Fanged Wyvern</p>
      </header>
      <ul class="monster_attributes_list">
        <li class="monster_attributes_list_item">
          <span class="monster_attributes_list_item_name"
            >Elements:</span
          ><span class="monster_attributes_list_item_value">None</span>
        </li>
        <li class="monster_attributes_list_item">
          <span class="monster_attributes_list_item_name"
            >Ailements:</span
          ><span class="monster_attributes_list_item_value">None</span>
        </li>
        <li class="monster_attributes_list_item">
          <span class="monster_attributes_list_item_name">
            Weakest to:</span
          ><span class="monster_attributes_list_item_value">Fire</span>
        </li>
      </ul>
      <ul class="monster_attributes_list">
        <li class="monster_attributes_list_item">
          <span>Location:</span>
          <span style="color: greenyellow">Ancient Forest</span>
        </li>
      </ul>
    </div>
  </div>
`
const monsterTitle = document.querySelector(".monster_title")
monsterTitle.innerHTML = data.name
const monsterSpecies = document.querySelector(".monster_type")
monsterSpecies.innerHTML = data.species
const elements = document.querySelector(".monster_attributes_list_item_value")

let elementsValue = ""
for(let i = 0; i < data.elements.length; i++ ){
  console.log(data.elements[i].element)
}