import { Circle, Rectangle, ShapeFactory, shapeType, Square } from '../src/Creational/Factory';

describe('Factory', () => {
    it('should belong to the concrete classes of the drawing methods and instance.', () => {
        const shapeFactory = new ShapeFactory();

        expect(shapeFactory.getShape(shapeType.CIRCLE)).toBeInstanceOf(Circle);
        expect(shapeFactory.getShape(shapeType.CIRCLE).draw()).toEqual('Created Circle');
        expect(shapeFactory.getShape(shapeType.RECTANGLE)).toBeInstanceOf(Rectangle);
        expect(shapeFactory.getShape(shapeType.RECTANGLE).draw()).toEqual('Created Rectangle');
        expect(shapeFactory.getShape(shapeType.SQUARE)).toBeInstanceOf(Square);
        expect(shapeFactory.getShape(shapeType.SQUARE).draw()).toEqual('Created Square');
    });
});