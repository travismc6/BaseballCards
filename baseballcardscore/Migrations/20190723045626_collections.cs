using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseballCardsCore.Migrations
{
    public partial class collections : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CollectionCards_Collections_CollectionId",
                table: "CollectionCards");

            migrationBuilder.AlterColumn<int>(
                name: "CollectionId",
                table: "CollectionCards",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_CollectionCards_Collections_CollectionId",
                table: "CollectionCards",
                column: "CollectionId",
                principalTable: "Collections",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CollectionCards_Collections_CollectionId",
                table: "CollectionCards");

            migrationBuilder.AlterColumn<int>(
                name: "CollectionId",
                table: "CollectionCards",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_CollectionCards_Collections_CollectionId",
                table: "CollectionCards",
                column: "CollectionId",
                principalTable: "Collections",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
