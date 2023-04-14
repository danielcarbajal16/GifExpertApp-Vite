import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en GifGridItem', () => {
    const title = "FC Barcelona";
    const url = "https://google.com/image.jpg";
    
    test('Debe de hacer match con el snapshot', () => {
        const { container } = render( <GifGridItem title={ title } url={ url } /> )
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el url y el alt indicado', () => {
        render( <GifGridItem title={ title } url={ url } /> );
        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( title );        
    });

    test('Debe de mostrar el titulo de la imagen en el componente', () => {
        render( <GifGridItem  title={ title } url={ url } />);

        expect( screen.getByText( title ) ).toBeTruthy();
    })
})