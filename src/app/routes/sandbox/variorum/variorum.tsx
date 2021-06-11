import { Original, Replacement } from './variorum-styles'
import { P } from 'app/components/markup'
import { ReactElement } from 'react'

export function VariorumSandboxRoute (): ReactElement {
  return (
    <div style={{ margin: '1.778rem auto', width: '56.2%' }}>
      <P>
        ”And how did Lady Brandon describe this wonderful young man? I know she
        goes in for giving a rapid <em>précis</em> of all her guests. I remember
        her bringing me up to a truculent and red-faced old gentleman covered
        all over with orders and ribbons, and hissing into my ear, in a tragic
        whisper which must have been perfectly audible to everybody in the room,
        <Replacement>the most astounding details</Replacement>
        <Original>
          something like ‘Sir Humpty Dumpty—you know—Afghan Frontier—Russian
          intrigues: very successful man—wife killed by an elephant—quite
          inconsolable—wants to marry a beautiful American widow—everybody does
          nowadays—hates Mr. Gladstone—but very much intereslated in beetles—ask
          him what he thinks of Schouvaloff.’
        </Original>
        I simply fled. I like to find out people for myself. But poor Lady
        Brandon treats her guests exactly as an auctioneer treats his goods. She
        either explains them entirely away, or tells one everything about them
        except what one wants to know.”
      </P>
      <P>
        <Replacement>
          “Poor Lady Brandon! You are hard on her, Harry!” said Hallward,
          listlessly.
        </Replacement>
      </P>
      <P>
        <Replacement>
          “My dear fellow, she tried to found a <em>salon</em>, and only
          succeeded in opening a restaurant. How could I admire her?”
        </Replacement>
      </P>
      <P>“But what did she say about Mr. Dorian Gray?”</P>
      <P>
        <Original>
          “Oh, she murmured, ‘Charming boy—poor dear mother and I quite
          inseparable—engaged to be married to the same man—I mean married on
          the same day—how very silly of me! Quite forget what he does—afraid
          he—doesn’t do anything—Oh, yes, plays the piano—or is it the violin,
          dear Mr. Gray?’ We could neither of us help laughing, and we became
          friends at once.”
        </Original>
      </P>
    </div>
  )
}
