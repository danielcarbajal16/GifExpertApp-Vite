import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( "../../src/hooks/useFetchGifs" );

describe('Pruebas en el componente GifGrid', () => {
    const category = 'Messi';
    
    test('Debe mostrar el loading mientras cargan las imagenes', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category } />);
        
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
    });

    test('Debe mostrar items cuando cargan las imagenes de useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Messi',
                url: 'https://google.com/image.jpg'
            },
            {
                id: '123',
                title: 'FC Barcelona',
                url: 'https://google.com/barcelona/logo.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);

        expect( screen.getAllByRole('img').length ).toBe( 2 );
    })
})