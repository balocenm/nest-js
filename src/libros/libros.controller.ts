import { Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';

@Controller('libros')
export class LibrosController {

    @Post()
    todosLibros(): string {
        return 'todos los libros';
    }
    @Get()
    creaLibro(): string {
        return 'crea un nuevo libro';
    }
    @Put(':id')
    modificaLibro(@Param('id') idLibro: string): string {
        return `actualiza un libro! ${idLibro}`;
    }
    @Delete(':id')
    borraLibro(@Param('id') idLibro: string): string {
        return 'borra un libro!';
    }

}
