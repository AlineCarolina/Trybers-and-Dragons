import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static instances = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer.instances += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number { return this.instances; }
}

export default Necromancer;