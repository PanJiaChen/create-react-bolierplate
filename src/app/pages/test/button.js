const colors = observable({
  foreground: '#000',
  background: '#fff'
})

const App = () => {
  <Provider colors={colors}>
    <app stuff... />
  </Provider>
}

const Button = observer(["colors"], ({ colors, label, onClick }) =>
  <button style={{
      color: colors.foreground,
      backgroundColor: colors.background
    }}
          onClick={onClick}
  >{label}<button>
    )
    colors.foreground = 'blue';
