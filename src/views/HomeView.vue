<template>
  <div>
<p>Abjv</p>
<button @click="Game()">Game</button>
  </div>
</template>
<script>
import Parse from 'parse'
import { defineComponent ,onMounted} from 'vue'


export default defineComponent({
  setup() {
    onMounted(()=>{
      console.log("hi")
      // await Parse.Cloud.run("hello")
    })
    const Game = ()=>{
        const GameScore = Parse.Object.extend("GameScore");
const gameScore = new GameScore();

gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);

gameScore.save()
.then((gameScore) => {
  // Execute any logic that should take place after the object is saved.
  // alert('New object created with objectId: ' + gameScore);
  console.log(gameScore)
}, (error) => {
  // Execute any logic that should take place if the save fails.
  // error is a Parse.Error with an error code and message.
  alert('Failed to create new object, with error code: ' + error.message);
});
      }

      return{
        Game
      }
  },
  
})
</script>
