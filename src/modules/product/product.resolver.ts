import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Product')
export class ProductResolver {
    @Query(() => String)
    hello() {
        return 'Hello nest js';
    }
}
