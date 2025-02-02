import { keyPicker, tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_GAME,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  TURN_ONE_START_OF_TURN,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import rule_sources from './rule_sources'

const FlyingTransportEffect = {
  name: `Flying Transport`,
  desc: `This model can fly, and can be garrisoned by up to 15 (25 if IRONCLAD) friendly Marine models even though it is not a terrain feature. If this unit is in a warscroll battalion, other units in the same battalion that can garrison this unit can be set up as this unit's garrison when this unit is set up.

  Halve this model's Move characteristic and it cannot Fly High if there are 11 (16 if IRONCLAD) or more models in its garrison. Units cannot join or leave this model's garrison if it has made a move or flown high in the same phase (they can join or leave before it does so). Models cannot contest objectives while garrisoning a SKYVESSEL.

  An attack made by a weapon that is in range of this model can target either this model or a unit in its garrison. If this model is destroyed, before it is removed from play, roll 1 dice for each model in its garrison. On a 1, that model is slain. Set up any surviving models wholly within 3" of this model and more than 3" from any enemy units.

  If this model is in a warscroll battalion, units from the same battalion that can garrison this model can be set up as this model's garrison when this model is set up.`,
  when: [DURING_GAME],
  rule_sources: [
    rule_sources.BATTLETOME_KHARADRON_OVERLORDS,
    rule_sources.ERRATA_JANUARY_2021,
    rule_sources.ERRATA_JULY_2021,
    rule_sources.ERRATA_OCTOBER_2022,
  ],
  shared: true,
}
const EndrinharnessEffect = {
  name: `Endrinharness`,
  desc: `If the unmodified hit roll for an attack made with a melee weapon by this model is 6, that attack inflicts D3 mortal wounds and the attack sequence ends (do not make a wound or save roll).`,
  when: [COMBAT_PHASE],
  shared: true,
}
const DisengageEffect = {
  name: `Disengage`,
  desc: `This model and any models in its garrison can still shoot if this model retreats in the same turn, as long as there are no enemy units that can fly within 3" of this model at the start of the retreat move and there are less than 10 wounds allocated to this model at the start of the retreat move.`,
  when: [MOVEMENT_PHASE, SHOOTING_PHASE],
  shared: true,
}
const ArkanautFlyHighEffect = {
  name: `Fly High`,
  desc: `Instead of making a normal move or retreat with this model, if there are less than 7 wounds currently allocated to this model, you can say that it will fly high (it can disengage). If you do so, remove this model from the battlefield and set it up again more than 1" from any terrain features or objectives and more than 9" from any enemy models.`,
  when: [MOVEMENT_PHASE],
  rule_sources: [rule_sources.BATTLETOME_KHARADRON_OVERLORDS, rule_sources.ERRATA_JULY_2021],
  shared: true,
}
const SkyCannonEffect = {
  name: `Sky Cannon`,
  desc: `Before attacking with a Sky Cannon, choose either the Shrapnel or Shell missile weapon characteristics for that shooting attack.`,
  when: [SHOOTING_PHASE],
  shared: true,
}
const AetherKhemistEffects = [
  {
    name: `Aetheric Augmentation`,
    desc: `In your hero phase you can pick 1 friendly SKYFARERS unit wholly within 12" of this model. Until your next hero phase, you can reroll wound rolls of 1 for attacks made by that unit. This ability cannot be used by an AETHER-KHEMIST that is part of a garrison, or on a friendly unit that is part of a garrison.`,
    when: [HERO_PHASE],
    shared: true,
  },
  {
    name: `Atmospheric Isolation`,
    desc: `Subtract 1 from hit rolls for attacks made by enemy models while they are within 3" of any friendly models with this ability. This ability cannot be used by an AETHER-KHEMIST that is part of a garrison.`,
    when: [SHOOTING_PHASE, COMBAT_PHASE],
    shared: true,
  },
]
const GlorySeekersEffects = [
  {
    name: `Glory Seekers`,
    desc: `You can reroll battleshock tests for this unit while it is wholly within 9" of an objective. This ability cannot be used if this unit is part of a garrison.`,
    when: [BATTLESHOCK_PHASE],
    shared: true,
  },
  {
    name: `Glory Seekers`,
    desc: `You can add 1 to hit rolls for attacks made by this unit while it is wholly within 9" of an objective. This ability cannot be used if this unit is part of a garrison.`,
    when: [SHOOTING_PHASE, COMBAT_PHASE],
    shared: true,
  },
]
const getSkyhookEffect = (val: number) => ({
  name: `Skyhook`,
  desc: `Add ${val} to charge rolls for this unit if it is armed with a Skyhook.`,
  when: [CHARGE_PHASE],
  shared: true,
})
const HitchersEffect = {
  name: `Hitchers`,
  desc: `If this model is wholly within 6" of a friendly SKYVESSEL immediately before the SKYVESSEL uses its Fly High ability, you can say that this model will hitch a lift instead of making a normal move or retreat (as long as this model has not already made a normal move or retreat in the same phase).

  If you do so, after that SKYVESSEL has moved, remove this model from the battlefield and set it up again wholly within 6" of that SKYVESSEL, more than 1" from any terrain features or objectives and more than 9" from any enemy models.

  No more than 7 models can hitch a lift on the same SKYVESSEL in the same turn.`,
  when: [MOVEMENT_PHASE],
  rule_sources: [rule_sources.BATTLETOME_KHARADRON_OVERLORDS, rule_sources.ERRATA_JULY_2021],
  shared: true,
}
const EndrincraftEffect = {
  name: `Endrincraft`,
  desc: `At the start of your hero phase, you can pick 1 friendly SKYVESSEL within 1" of this unit and roll 1 dice for each model in this unit. For each 4+, heal 1 wound allocated to that SKYVESSEL.`,
  when: [START_OF_HERO_PHASE],
}
const GrapnelLauncherEffect = {
  name: `Grapnel Launcher`,
  desc: `Enemy units cannot retreat if they are within 3" of any models from this unit armed with a Grapnel Launcher.`,
  when: [MOVEMENT_PHASE],
  shared: true,
}
const BombRacksEffect = {
  name: `Bomb Racks`,
  desc: `At the start of the combat phase, you can pick 1 enemy unit within 1" of this model and roll a D6. Add the Bomb Rack modifier from this model's damage table to the roll. On a 4+, that enemy unit suffers D3 mortal wounds.`,
  when: [START_OF_COMBAT_PHASE],
  shared: true,
}
const SkyminesEffect = {
  name: `Skymines`,
  desc: `If an enemy unit that can fly ends a charge move within 1" of any friendly units with this ability, you can roll 1 dice for each model in that enemy unit. For each 6, that unit suffers 1 mortal wound.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const EndrinmasterHealEffect = (val: '3' | 'D3') => ({
  name: `Endrinmaster`,
  desc: `At the start of your hero phase, you can pick 1 friendly SKYVESSEL within 1" of this model. Heal up to ${val} wounds allocated to that SKYVESSEL.`,
  when: [START_OF_HERO_PHASE],
  shared: true,
})
const AethericNavigatorAndEndinriggerEffects = [
  {
    name: `Aetheric Navigator and Endrinrigger`,
    desc: `In your hero phase, you can heal 1 wound allocated to this model.`,
    when: [HERO_PHASE],
    shared: true,
  },
  {
    name: `Aetheric Navigator and Endrinrigger`,
    desc: `You can reroll run rolls for this model.`,
    when: [MOVEMENT_PHASE],
    shared: true,
  },
]

const Units = {
  'Endrinmaster with Dirigible Suit': {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['By Grungni, I Have My Eye On You!'])],
    },
    effects: [EndrinmasterHealEffect('3'), HitchersEffect],
  },
  'Endrinmaster with Endrinharness': {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['By Grungni, I Have My Eye On You!'])],
    },
    effects: [EndrinmasterHealEffect('D3'), EndrinharnessEffect],
  },
  'Aether-Khemist': {
    effects: [...AetherKhemistEffects],
  },
  'Bjorgen Thundrik': {
    effects: [...AetherKhemistEffects],
  },
  "Thundrik's Profiteers": {
    effects: [
      {
        name: `Khazgan Drakkskewer`,
        desc: `Add 1 to Khazgan Drakkskewer's Wounds characteristic. In addition, Khazgan Drakkskewer can fly.`,
        when: [DURING_GAME],
      },
      {
        name: `Thundrik's Profiteers`,
        desc: `You can add 1 to hit rolls for attacks made by this unit while it is wholly within 9" of BJORGEN THUNDRIK. This ability cannot be used if this unit is part of a garrison.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Thundrik's Profiteers`,
        desc: `You can reroll battleshock tests for this unit while it is wholly within 9" of BJORGEN THUNDRIK. This ability cannot be used if this unit is part of a garrison.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  'Aetheric Navigator': {
    effects: [
      {
        name: `Aethersight`,
        desc: `This model can attempt to unbind 1 spell in the enemy hero phase, in the same manner as a WIZARD.`,
        when: [HERO_PHASE],
      },
      {
        name: `Aethersight`,
        desc: `This model can attempt to dispel 1 endless spell at the start of your hero phase in the same manner as a WIZARD.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Aetherstorm`,
        desc: `In your hero phase, you can pick 1 enemy unit within 36" of this model that is visible to them and can fly, and roll a D6. On a 1-2 nothing happens. On a 3-5 halve the Move characteristic of that unit until your next hero phase. On a 6, halve the Move characteristic of that unit until your next hero phase, and that unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
      {
        name: `Read the Winds`,
        desc: `You can reroll run and charge rolls for friendly SKYVESSELS that are visible to a friendly AETHERIC NAVIGATOR that has not attempted to use the Aetherstorm ability in the same turn.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
    ],
  },
  'Arkanaut Admiral': {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['Master of the Skies'])],
    },
    effects: [
      {
        name: `If You Want a Job Done...`,
        desc: `Add 1 to hit rolls for attacks made bv this unit that target a HERO or MONSTER.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_MAY_2022],
      },
      {
        name: `Protect the Admiral!`,
        desc: `Before you allocate a wound or mortal wound to this unit, or instead of making a ward roll for a wound or mortal wound that would be allocated to this unit, if this unit is within 3" of any other friendly SKYFARERS units, you can roll a dice. On a 1-2, that wound or mortal wound is allocated to this unit as normal. On a 3+, that wound or mortal wound is allocated to another friendly SKYFARERS unit within 3" of this unit instead and cannot be negated.`,
        when: [WOUND_ALLOCATION_PHASE],
        rule_sources: [rule_sources.WHITE_DWARF_MAY_2022],
      },
      {
        name: `Aether-powered Munitions`,
        desc: `After the players have received their starting command points but before the start of the first turn, you can pick 1 of the following Aether-powered Munitions for this unit to use during the battle:
                
        Blazebeard and Sons 'Drakk-hobbler' Mag-bolas: Once per battle, at the start of your shooting phase, pick 1 enemy MONSTER within 12" of this unit and roll a dice. On a 2+, that unit is grappled until the end of your opponent's turn. While an enemy unit is grappled, charge rolls made for that unit are made by rolling 1D6 instead of 2D6.
        
        Celestium Burst-grenade: Once per battle, at the start of your shooting phase, pick 1 enemy unit within 12" of this unit and roll a dice. On a 2+, ward rolls cannot be made for wounds and mortal wounds caused by attacks that target that unit until the end of the phase.

        Grudgebreaker Rounds: Once per battle, at the start of your shooting phase, pick 1 friendly KHARADRON OVERLORDS unit wholly within 12" of this unit that is not a SKYVESSEL. Until the end of that phase, improve the Rend characteristic of that unit's missle weapons by 1. The same unit cannot be picked to benefit from this ability than once in the same phase. `,
        when: [TURN_ONE_START_OF_TURN],
        rule_sources: [rule_sources.WHITE_DWARF_MAY_2022],
      },
    ],
  },
  'Grundstok Thunderers': {
    effects: [
      {
        name: `Honour Bearer`,
        desc: `Reroll battleshock tests for units with a Honor Bearer.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Choking Fug`,
        desc: `Subtract 1 from hit rolls for attacks made by enemy models within 3" of any friendly models armed with an Aetheric Fumigator. This ability cannot be used by a model that is part of a garrison.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Pin Them, Shred Them, Finish Them`,
        desc: `Add 1 to hit rolls for attacks made with a Grundstok Mortar, Decksweeper or Aethercannon when it is used by a unit that has at least 1 of each of these weapons (i.e. at least 1 Grundstok Mortar, and at least 1 Decksweeper, and at least 1 Aethercannon). This ability cannot be used by a model that is part of a garrison.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Drive Them Back!`,
        desc: `Add 1 to the Attacks characteristic of missile weapons used by this unit while any enemy units are within 3" of this unit. This ability cannot be used by a model that is part of a garrison.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Brokk Grungsson, Lord-Magnate of Barak-Nar': {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ['First Rule of Grungsson'])],
    },
    effects: [
      {
        name: `Custom-built Dirigible Suit`,
        desc: `After this model makes a charge move, you can pick 1 enemy unit within 1" of this model and roll a D6. On a 2+, that enemy unit suffers D3 mortal wounds.`,
        when: [CHARGE_PHASE],
      },
      EndrinharnessEffect,
      HitchersEffect,
    ],
  },
  Skywardens: {
    effects: [
      {
        name: `Custodian`,
        desc: `1 model in this unit can be a Custodian. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timed Charges`,
        desc: `Roll 1 dice for each enemy unit that is within 3" of this unit immediately before this unit makes a retreat move. On a 4+, the unit being rolled for suffers D3 mortal wounds.`,
        when: [MOVEMENT_PHASE],
      },
      getSkyhookEffect(1),
      GrapnelLauncherEffect,
      HitchersEffect,
      SkyminesEffect,
    ],
  },
  Endrinriggers: {
    effects: [
      {
        name: `Mizzenmaster`,
        desc: `1 model in this unit can be a Mizzenmaster. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      EndrincraftEffect,
      getSkyhookEffect(1),
      GrapnelLauncherEffect,
      HitchersEffect,
    ],
  },
  'Arkanaut Company': {
    effects: [...GlorySeekersEffects],
  },
  'Grundstok Gunhauler': {
    effects: [
      {
        name: `Ahead Full`,
        desc: `Once per battle, at the start of your movement phase, you can say that this model will move ahead full. If you do so, add 6" to the Move characteristic of this model in that phase.`,
        when: [START_OF_MOVEMENT_PHASE],
      },
      {
        name: `Drill Cannon`,
        desc: `If the unmodified hit roll for an attack made with a Drill Cannon is 5+, that attack inflicts 3 mortal wounds on the target and the attack sequence ends (do not make a wound or save roll).`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Escort Vessel`,
        desc: `Roll 1 dice each time you allocate a wound or mortal wound to a friendly SKYVESSEL other than a GRUNDSTOK GUNHAULER while it is within 3" of any friendly GRUNDSTOK GUNHAULERS. On a 6, that wound or mortal wound is negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      // Differs from the other Bomb Racks ability
      {
        name: `Bomb Racks`,
        desc: `At the start of the combat phase, you can pick 1 enemy unit within 1" of this model and roll a D6. On a 4+, that enemy unit suffers D3 mortal wounds.`,
        when: [START_OF_COMBAT_PHASE],
      },
      DisengageEffect,
      // This differs from the Arkanaut flavor of Fly High
      {
        name: `Fly High`,
        desc: `Instead of making a normal move or retreat with this model, you can say that it will fly high (it can disengage). If you do so, remove this model from the battlefield and set it up again more than 1" from any terrain features or objectives and more than 9" from any enemy models.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_KHARADRON_OVERLORDS, rule_sources.ERRATA_JULY_2021],
      },
      SkyCannonEffect,
    ],
  },
  'Arkanaut Frigate': {
    effects: [
      ...AethericNavigatorAndEndinriggerEffects,
      BombRacksEffect,
      DisengageEffect,
      ArkanautFlyHighEffect,
      FlyingTransportEffect,
      getSkyhookEffect(2),
      SkyCannonEffect,
    ],
  },
  'Arkanaut Ironclad': {
    effects: [
      ...AethericNavigatorAndEndinriggerEffects,
      BombRacksEffect,
      DisengageEffect,
      ArkanautFlyHighEffect,
      FlyingTransportEffect,
      getSkyhookEffect(2),
      SkyCannonEffect,
    ],
  },
  'Dagnai Holdenstock': {
    effects: [
      {
        name: `Gold-plated Reputation`,
        desc: `If this model is included in a Kharadron Overlords army, it starts the battle with 2 shares of aether-gold instead of 1.`,
        when: [DURING_GAME],
      },
      {
        name: `Reel 'Em In`,
        desc: `If an attack made with this model's Harpoon Gun scores a hit on a MONSTER, if that MONSTER is not slain after that attack has been resolved, roll a dice. On a 4+, that MONSTER is skewered until the start of your next shooting phase. While that MONSTER is skewered, each time it makes a move, it must finish that move at least as close to this model as it was at the start of the move.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Drekki Flynt': {
    effects: [
      {
        name: `Captain of the Aelsling`,
        desc: `You can pick 1 Barak-Mhornar Arkanaut Frigate in your army to be the Aelsling. Record this information on your roster. Add 1 to the Damage characteristic of that unit's Boarding Weapons.`,
        when: [START_OF_GAME, COMBAT_PHASE],
      },
      {
        name: `Let Me Drive!`,
        desc: `You can reroll run rolls and charge rolls made for the Aelsling while this unit is in its garrison.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },

      {
        name: `Auxiliary Skyhook`,
        desc: `Each time this unit fights, after all of its attacks have been resolved, you can pick 1 enemy Monster within 3" of this unit and roll a dice. On a 2+, that Monster suffers 3 mortal wounds.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Light-fingered`,
        desc: `At the start of the combat phase, if this unit is within 1" of an enemy Hero that has an artefact of power, you can say that Drekki will try to 'borrow' that artefact. If you do so, roll a dice. On a 3+, that artefact of power can no longer be used (if a weapon was picked when the artefact of power was selected, that weapon reverts to normal). This ability cannot be used while this unit is part of a garrison.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
}

export default tagAs(Units, 'unit')
