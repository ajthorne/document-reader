import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const DocumentReader = React.createClass({
  getInitialState: function () {
    return store.session.toJSON();
  },

  componentDidMount: function() {
    store.session.get();
    store.session.on('change', () => {
        this.setState(store.session.toJSON());
    })
  },

  checkHandler: function () {
    console.log('You checked me!');
    hashHistory.push('/confirm');
  },

  render: function () {
    console.log(this.state.userRead);

    let label;

    if (this.state.userRead) {
      label = <label><input checked={this.state.userRead} type="checkbox"/>Read</label>
    } else {
      label = <label><input checked={this.state.userRead} onChange={this.checkHandler} type="checkbox"/>Mark as Read</label>
    }

    return (
      <div className="main-view">
          <div className="textArea">
          Cat ipsum dolor sit amet, scamper. Eat grass, throw it back up spit up on light gray carpet instead of adjacent linoleum play riveting piece on synthesizer keyboard. Caticus cuteicus make meme, make cute face or destroy the blinds for chase red laser dot and Gate keepers of hell. Gate keepers of hell lick plastic bags wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again, claws in your leg or poop on grasses for soft kitty warm kitty little ball of furr. Plan steps for world domination sit by the fire. Leave dead animals as gifts the dog smells bad. Leave hair everywhere. Shove bum in owner's face like camera lens make muffins. Eat the fat cats food soft kitty warm kitty little ball of furr stare at ceiling light. Stare out the window refuse to drink water except out of someone's glass or find empty spot in cupboard and sleep all day and claw drapes. Lick the other cats eat owner's food eat a plant, kill a hand but climb a tree, wait for a fireman jump to fireman then scratch his face play time, so chew foot. Plan steps for world domination chirp at birds sit in box or sit by the fire inspect anything brought into the house. Chirp at birds refuse to leave cardboard box chase red laser dot you call this cat food? yet spread kitty litter all over house. Who's the baby knock dish off table head butt cant eat out of my own dish. Meow for food, then when human fills food dish, take a few bites of food and continue meowing leave hair everywhere hunt anything that moves, but curl into a furry donut play riveting piece on synthesizer keyboard. Roll on the floor purring your whiskers off sit on human shove bum in owner's face like camera lens but scamper has closed eyes but still sees you scream at teh bath for leave hair everywhere. Destroy couch spread kitty litter all over house eat from dog's food spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce but soft kitty warm kitty little ball of furr for sit on human. Cough furball inspect anything brought into the house. Curl into a furry donut under the bed, for fall asleep on the washing machine refuse to leave cardboard box. Sweet beast lick butt and make a weird face. Lick plastic bags if it smells like fish eat as much as you wish present belly, scratch hand when stroked but sleep on dog bed, force dog to sleep on floor yet meow all night having their mate disturbing sleeping humans eat from dog's food put toy mouse in food bowl run out of litter box at full speed . Scream at teh bath always hungry but kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff climb leg, for meow for food, then when human fills food dish, take a few bites of food and continue meowing.
          </div>
          {label}
      </div>
    )
  }
});

export default DocumentReader;
