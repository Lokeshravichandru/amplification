/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RuleActionWhereInput } from "./RuleActionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RuleActionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RuleActionWhereInput,
  })
  @ValidateNested()
  @Type(() => RuleActionWhereInput)
  @IsOptional()
  @Field(() => RuleActionWhereInput, {
    nullable: true,
  })
  every?: RuleActionWhereInput;

  @ApiProperty({
    required: false,
    type: () => RuleActionWhereInput,
  })
  @ValidateNested()
  @Type(() => RuleActionWhereInput)
  @IsOptional()
  @Field(() => RuleActionWhereInput, {
    nullable: true,
  })
  some?: RuleActionWhereInput;

  @ApiProperty({
    required: false,
    type: () => RuleActionWhereInput,
  })
  @ValidateNested()
  @Type(() => RuleActionWhereInput)
  @IsOptional()
  @Field(() => RuleActionWhereInput, {
    nullable: true,
  })
  none?: RuleActionWhereInput;
}
export { RuleActionListRelationFilter as RuleActionListRelationFilter };
