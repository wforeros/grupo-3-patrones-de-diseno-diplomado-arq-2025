interface Clonable {
    clone(): Hero;
}

class Hero implements Clonable {
    constructor(
        public name: string,
        public classType: string,
        public level: number,
        public experience: number,
        public skills: string[],
        public appearance: string
    ) {}

    clone(): Hero {
        return new Hero(this.name, this.classType, this.level, this.experience, [...this.skills], this.appearance);
    }
}

class HeroRegistry {
    private heroPrototypes: Map<string, Hero> = new Map();

    registerHero(data: { name: string; classType: string; level: number; experience: number; skills: string[]; appearance: string }): void {
        this.heroPrototypes.set(data.classType.toLowerCase(), new Hero(data.name, data.classType, data.level, data.experience, data.skills, data.appearance));
    }

    cloneHero(type: string): Hero | null {
        const hero = this.heroPrototypes.get(type.toLowerCase());
        if (hero) {
            const clonedHero = hero.clone();
            this.heroPrototypes.set(clonedHero.name.toLowerCase(), clonedHero);
            return clonedHero;
        }
        return null;
    }

    listHeroes(): void {
        console.log("Listado de héroes registrados:");
        this.heroPrototypes.forEach((hero, key) => {
            console.log(`Tipo: ${key}, Nombre: ${hero.name}, Nivel: ${hero.level}, Experiencia: ${hero.experience}, Apariencia: ${hero.appearance}`);
        });
    }
}


export function program1(){
    const registry = new HeroRegistry();
    
    registry.registerHero({ name: "Leon", classType: "Warrior", level: 10, experience: 5000, skills: ["Slash", "Shield Block"], appearance: "Armored" });
    registry.registerHero({ name: "Merlin", classType: "Mage", level: 15, experience: 8000, skills: ["Fireball", "Teleport"], appearance: "Robed" });
    registry.registerHero({ name: "Robin", classType: "Archer", level: 12, experience: 6000, skills: ["Arrow Rain", "Eagle Eye"], appearance: "Leather Tunic" });
    
    console.log("");
    registry.listHeroes();
    console.log("");
    console.log("Clonamos: [warrior] en [leon]");
    const clonedWarrior = registry.cloneHero("warrior");
    if (clonedWarrior) {
        clonedWarrior.name = "Maximus";
        clonedWarrior.appearance = "Golden Armor";
        registry.registerHero(clonedWarrior);
    }

    console.log("");
    
    registry.listHeroes();
}