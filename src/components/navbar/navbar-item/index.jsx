const NavbarItem = ({element: Element, active}) => {
  const color = active ? "var(--main-accent-color)" : "var(--inactive-color)"
  return (
    <Element style={{
      fill: color,
      stroke: color,
    }}/>
  )
}

export default NavbarItem