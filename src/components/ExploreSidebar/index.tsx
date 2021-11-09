import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'
import * as S from './styles'

export type ExploreSidebarProps = {
  items: Items[]
}

export type Items = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size="small">
          {item.title}
        </Heading>
        {item.type === 'checkbox' &&
          item.fields.map((field) => (
            <Checkbox
              key={field.name}
              name={field.name}
              label={field.label}
              labelFor={field.name}
            />
          ))}
        {item.type === 'radio' &&
          item.fields.map((field) => (
            <Radio
              key={field.name}
              value={field.name}
              name={item.name}
              label={field.label}
              labelFor={field.name}
            />
          ))}
      </div>
    ))}

    {/* <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>

    <Checkbox
      name="under-$50"
      label="Under $50"
      labelFor="under-$50"
    ></Checkbox>
    <Checkbox
      name="under-$100"
      label="Under $100"
      labelFor='"under-$100"'
    ></Checkbox>
    <Checkbox
      name="under-$150"
      label="Under $150"
      labelFor="under-$150"
    ></Checkbox>
    <Checkbox
      name="under-$200"
      label="Under $200"
      labelFor="under-$200"
    ></Checkbox>
    <Checkbox name="free" label="Free" labelFor="free"></Checkbox>
    <Checkbox
      name="discounted"
      label="Discounted"
      labelFor="discounted"
    ></Checkbox>

    <Heading lineBottom lineColor="secondary" size="small">
      Sort by
    </Heading>

    <Radio
      name="sort-by"
      label="High to low"
      labelFor="high-to-low"
      id="high-to-low"
    />
    <Radio
      name="sort-by"
      label="Low to high"
      labelFor="low-to-high"
      id="low-to-high"
    />

    <Heading lineBottom lineColor="secondary" size="small">
      System
    </Heading>

    <Checkbox name="windows" labelFor="windows" label="Windows"></Checkbox>
    <Checkbox name="linux" labelFor="linux" label="Linux"></Checkbox>
    <Checkbox name="mac" labelFor="mac" label="MAC"></Checkbox>

    <Heading lineBottom lineColor="secondary" size="small">
      Genre
    </Heading>

    <Checkbox name="action" labelFor="action" label="Action"></Checkbox>
    <Checkbox
      name="adventure"
      labelFor="adventure"
      label="Adventure"
    ></Checkbox>
    <Checkbox name="fps" labelFor="fps" label="FPS"></Checkbox>
    <Checkbox name="mmorpg" labelFor="mmorpg" label="MMORPG"></Checkbox>
    <Checkbox name="rpg" labelFor="rpg" label="RPG"></Checkbox>
    <Checkbox name="indie" labelFor="indie" label="Indie"></Checkbox>
    <Checkbox name="shooters" labelFor="shooters" label="Shooters"></Checkbox>
    <Checkbox
      name="simulation"
      labelFor="simulation"
      label="Simulation"
    ></Checkbox> */}

    <Button fullWidht size="medium">
      Filtrar
    </Button>
  </S.Wrapper>
)

export default ExploreSidebar
