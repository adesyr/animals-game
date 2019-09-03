import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-animals-game",
  templateUrl: "./animals-game.page.html",
  styleUrls: ["./animals-game.page.scss"]
})
export class AnimalsGamePage implements OnInit {
  public animals = [
    {
      title: "Vache",
      image: "img/animals/cow-icon.png",
      desc: "Meugle",
      file: "/sounds/cow.mp3",
      playing: false
    },
    {
      title: "Dauphin",
      image: "img/animals/dolphin-icon.png",
      desc: "Siffle",
      file: "/sounds/dolphin.mp3",
      playing: false
    },
    {
      title: "Grenouille",
      image: "img/animals/frog-icon.png",
      desc: "Coasse",
      file: "/sounds/frog.mp3",
      playing: false
    },
    {
      title: "Oiseau",
      image: "img/animals/bird-icon.png",
      desc: "Chante",
      file: "/sounds/bird.mp3",
      playing: false
    },
    {
      title: "Cochon",
      image: "img/animals/pig-icon.png",
      desc: "Grogne",
      file: "/sounds/pig.mp3",
      playing: false
    },
    {
      title: "Chien",
      image: "img/animals/puppy-icon.png",
      desc: "Aboie",
      file: "/sounds/dog.mp3",
      playing: false
    },
    {
      title: "Chat",
      image: "img/animals/black-cat-icon.png",
      desc: "Miaule",
      file: "/sounds/cat.mp3",
      playing: false
    },
    {
      title: "Cheval",
      image: "img/animals/horse-icon.png",
      desc: "Hennit",
      file: "/sounds/horse.wav",
      playing: false
    },
    {
      title: "Ane",
      image: "img/animals/donkey-icon.png",
      desc: "Brait",
      file: "/sounds/donkey.wav",
      playing: false
    },
    {
      title: "poule",
      image: "img/animals/poule-icon.jpg",
      desc: "Cocote",
      file: "/sounds/poule.wav",
      playing: false
    }
  ];

  // private car pas besoin d'être affiché dans la vue
  private chosenAnimal;
  // Instancier un audio
  private media;


  constructor(private toastCtrl: ToastController) {}

  ngOnInit() {}

  play() {
    // choisir un animal au hasard
    if (!this.chosenAnimal) {
      let randomPosition = [Math.floor(Math.random() * this.animals.length)];
      this.chosenAnimal = this.animals[randomPosition];
    }

    // Stopper le son en cours
    // si le temps du son n'est pas le tps final du son
    if (this.media && this.media.currentTime != this.media.duration) {
      this.media.pause();
    }

    // Lecture du son
    this.media = new Audio("assets" + this.chosenAnimal.file);
    //  pour le fermer en mémooire
    this.media.load();
    this.media.play();
    this.chosenAnimal.playing = true;

    //  afficher la note de musique seulement quand la musique est jouée
    var that = this;
    this.media.ontimeupdate = function() {
      //  si le son est terminé
      if (this.ended && that.chosenAnimal) {
        that.chosenAnimal.playing = false;
      }
    };
  }
  async guess(animal) {
    var message;
    if (!this.chosenAnimal) {
      message = "Il faut d'abord cliqué sur jouer avant de deviner un animal";
    } else if (animal.title != this.chosenAnimal.title) {
      message = "Perdu mais tu peux essayer encore";
    } else {
      message = "Gagné !!! Bravo, tu peux rejouer si tu veux";
      // on arrete le son du jeu joué en cours
      this.chosenAnimal.playing = false;
      // on rafraichi le jeu pour pouvoir rejouer
      this.chosenAnimal = null;
    }

    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      position: "bottom"
    });

    toast.present();
  }
}
