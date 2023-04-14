import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en el componente AddCategory', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'FC Barcelona' } } );

        expect( input.value ).toBe( 'FC Barcelona' );
    });

    test('Debe llamar correctamente al onNewCategory con un inputValue valido', () => {
        const inputValue = 'FC Barcelona';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('No debe llamar a la funcion onNewCategory si el inputValue está vacio', () => {
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    })
})