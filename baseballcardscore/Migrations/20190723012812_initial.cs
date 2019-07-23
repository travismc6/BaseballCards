using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseballCardsCore.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_CardSets_CardSetId",
                table: "Cards");

            migrationBuilder.AlterColumn<int>(
                name: "CardSetId",
                table: "Cards",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_CardSets_CardSetId",
                table: "Cards",
                column: "CardSetId",
                principalTable: "CardSets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_CardSets_CardSetId",
                table: "Cards");

            migrationBuilder.AlterColumn<int>(
                name: "CardSetId",
                table: "Cards",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_CardSets_CardSetId",
                table: "Cards",
                column: "CardSetId",
                principalTable: "CardSets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
