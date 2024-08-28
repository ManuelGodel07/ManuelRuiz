function MyComponent() {
    console.log('hola mundo')
    const a = document.cookie;
    const b = document.domain;
    return (
        <div>
            <h1>Hello, welcome to my calculator!</h1>
            <p>{`${a}\nNew data: ${b}`}</p>
        </div>
    );
}




ReactDOM.render(<MyComponent />, document.getElementById('react-component'));
