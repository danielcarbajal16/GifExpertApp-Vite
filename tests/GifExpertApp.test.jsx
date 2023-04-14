import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en el componente GifExpertApp', () => {
    test('Debe mostrar imagenes con la categoria inicial', () => {
        const initialCategory = 'FC Barcelona';
        const handleAddCategories = jest.fn();
        
        render( <GifExpertApp /> );
        
        expect( screen.getByText( initialCategory ) ).toBeTruthy();
    })

    test('Debe mostrar nuevas imagenes con la categoria mandada', async () => {
        const inputValue = 'Messi';
        
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );
        
        await waitFor(
            () => expect( screen.getAllByRole('img').length ).toBeGreaterThan(0)
        );
        
        expect( screen.getByText( inputValue ) ).toBeTruthy();
    });

    test('No debe mostrar nuevas imagenes con una categoria repetida', () => {
        const inputValue = 'FC Barcelona';
        
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );
        
        expect( screen.getAllByText( inputValue ).length ).toBe( 1 );
    })
})