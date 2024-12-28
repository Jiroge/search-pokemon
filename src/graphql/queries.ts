import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      # Basic Info
      id
      name
      number
      classification
      
      # Physical Characteristics
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      
      # Battle Info
      types
      resistant
      weaknesses
      maxCP
      maxHP
      fleeRate
      
      # Combat Stats
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      
      # Media
      image
      
      # Evolution
      evolutions {
        id
        name
        image
        number
        types
      }

      # Pre-evolution if any
      evolutionRequirements {
        amount
        name
      }
    }
  }
`;