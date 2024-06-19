# ローカル開発用のMySQLコンテナ
FROM mysql:8.1

# 初期化SQLをコンテナにコピー
COPY ./ddl.sql /docker-entrypoint-initdb.d/ddl.sql
